import React , {useEffect ,useState} from 'react'
import NavigationBar from './components/NavigationBar';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';




function ExtraCredit() {
    const [token,setToken] = useState()
    const [navigationData,setNavigationData] = useState()
    useEffect(() => {
        const fetchToken = async () => {
        const url = 'https://demo.dotcms.com/api/v1/authentication/api-token';

        try {
            const response = await fetch(url, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'            
            },
            body: JSON.stringify({
                user: 'admin@dotcms.com',
                password: 'admin',
                expirationDays: 10,
            }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Token:', data);
                setToken(data)
                return
            } else {
                console.error('Error:', data);
                alert('could not get token')
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
        };

        fetchToken();
    }, []);

    const fetchToken = async () => {
        const url = 'https://demo.dotcms.com/api/v1/authentication/api-token';

        try {
            const response = await fetch(url, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'            
            },
            body: JSON.stringify({
                user: 'admin@dotcms.com',
                password: 'admin',
                expirationDays: 10,
            }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Token:', data);
                setToken(data)
                return
            } else {
                console.error('Error:', data);
                alert('could not get token')
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    const GET_DATA=gql`
    query PageAPI {
        page(url: "/index") {
            title
            url
            seodescription
            titleImage{
            name
            }
            host {
            hostName
            }
            layout {
            header
            footer
            body {
                rows {
                columns {
                    containers {
                    identifier
                    uuid
                    }
                }
                }
            }
            }
        }
        }
    `

    const DataComponent = () => {
        const { loading, error, data } = useQuery(GET_DATA);
      
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;
      
        return (
          <div>
            {data.data.map(item => (
              <p key={item.id}>{item.name}</p>
            ))}
          </div>
        );
      };
      

    const fetchNavItems = async () => {
        
      try {
        //await fetchToken()
        const url = 'https://demo.dotcms.com/api/v1/nav/?depth=2';
        const response = await fetch(url, {
          method: 'GET', 
          headers: {
            'Authorization':`Bearer ${token.entity.token}`
        }
        });

        const data = await response.json();

        if (response.ok) {
          console.log('Navigation Data:', data);
          setNavigationData(data)
        } else {
          console.error('Error fetching data:', data);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    useEffect(() => {

    fetchNavItems();
    
    }, [token])
    


        
    


  return (
    <div> TOKEN { token !== undefined && token.entity.token}
    { /* navigationData !== undefined && navigationData.entity.children */}
    <p>NAV BAR using API routing to external pages</p>
    <NavigationBar navigationData={navigationData}/>
    <p>Attempted graphql but i seem to be getting a corserror</p>
    <DataComponent/>
    </div>
  )
}

export default ExtraCredit