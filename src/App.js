import './App.css';
import React , {useEffect ,useState} from 'react'
import NavigationBar from './components/NavigationBar'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './home.js'
import TravelBlog from './TravelBlog'
import Destinations from './Destinations'
import Store from './Store'
import Travelbot from './Travelbot'
import MembersOnly from './MembersOnly'
import ContactUs from './ContactUs'
import BlogPostDetails from './BlogPostDetails';
import ExtraCredit from './ExtraCredit.js';

import logo from './logo0.png'


function App() {
const [token,setToken] = useState()
const MANUAL_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhcGliYzBkZWE2Ny0xM2VmLTRjOWUtOTgwMi0yM2UwYmUxNDkzN2UiLCJ4bW9kIjoxNzI4MDA2OTg4MDAwLCJuYmYiOjE3MjgwMDY5ODgsImlzcyI6Ijk0Njc0Y2I0NDIiLCJleHAiOjE3Mjg4NzA5ODgsImlhdCI6MTcyODAwNjk4OCwianRpIjoiMTAyMzE0NjgtMWIwZS00OWFlLTlhMGYtYWQwNjM0NWE3YjRjIn0.Dyk3kNIhob7YTiz_b4FC6SGWvY_TZHbjNrLccAxLjwo'

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
      
  const httpLink = createHttpLink({
    uri: 'https://demo.dotcms.com/api/v1/graphql', 
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization:  `Bearer ${MANUAL_TOKEN}` ,
      },
    };
  });
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });


  return (
    <div className="App">
      <ApolloProvider client={client}>
      <BrowserRouter>
      <div>
        <nav>
          <div className="navigationBar">
          <img src={logo}/>
          <ul>
            <li><Link to="/home">home</Link></li>
            <li><Link to="/home">home</Link></li>
            <li><Link to="/travel-blog">travel-blog</Link></li>
            <li><Link to="/destinations">destinations</Link></li>
            <li><Link to="/store">store</Link></li>
            <li><Link to="/travelbot">travelbot</Link></li>
            <li><Link to="/members-only">members-only</Link></li>
            <li><Link to="/contact-us">contact-us</Link></li>
            <li><Link to="/extra-credit">Extra Credit</Link></li>

            </ul>
          </div>
        </nav>
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/travel-blog" element={<TravelBlog />}/>
            <Route path="/destinations" element={<Destinations />}/>
            <Route path="/store" element={<Store />}/>
            <Route path="/travelbot" element={<Travelbot />}/>
            <Route path="/members-only" element={<MembersOnly />}/>
            <Route path="/contact-us" element={<ContactUs />}/>
            <Route path="/travel-blog/post/:postId" element={<BlogPostDetails  />}/>   
            <Route path="/extra-credit" element={<ExtraCredit />}/>         
          </Routes>
      </div>
      </BrowserRouter>   
      </ApolloProvider> 
    </div>
  );
}

export default App;
