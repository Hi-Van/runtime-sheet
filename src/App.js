import React from 'react';
import { Button, Box, Card, CardContent } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content-wrapper">

        <div className="title">
          <span role="img" aria-label="cloud" style={{ fontSize: '3rem', textAlign: 'center', margin: '.8rem' }}>🏃‍♂️</span>
          <h1>RUNTIME
            <a href="https://twitter.com/Hi_Im_Van" target="_blank" rel="noopener noreferrer"> By Van S.</a>
            <a href="https://github.com/MKaiserW" target="_blank" rel="noopener noreferrer"> and Max W.</a>
          </h1>
        </div>
        
        <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
          <Card style={{margin: '40px'}}>
            <CardContent>
              <h1 className="ds">Singly Linked List</h1>
              <ul>
                <li>Access: O(n)</li>
                <li>Search: O(n)</li>
                <li>Insert: O(1)</li>
                <li>Delete: O(1)</li>
              </ul>
              <a href="https://github.com/Hi-Van/DSA-in-Python-and-JavaScript/blob/master/SLL.py" target="_blank" rel="noopener noreferrer"><Button variant="contained" color="secondary" size="large" style={{margin:'20px'}} disableElevation >Python</Button></a>
              <a href="https://github.com/Hi-Van/DSA-in-Python-and-JavaScript/blob/master/SLL.js" target="_blank" rel="noopener noreferrer"><Button variant="contained" color="secondary" size="large" style={{ margin:'20px'}} disableElevation >JavaScript</Button></a>
            </CardContent>
          </Card>

          <Card style={{margin: '40px'}}>
            <CardContent>
              <h1 className="ds">Doubly Linked List</h1>
              <ul>
                <li>Access: O(n)</li>
                <li>Search: O(n)</li>
                <li>Insert: O(1)</li>
                <li>Delete: O(1)</li>
              </ul>
              <a href="https://github.com/Hi-Van/DSA-in-Python-and-JavaScript/blob/master/DLL.js" target="_blank" rel="noopener noreferrer"><Button variant="contained" color="secondary" size="large" style={{margin:'20px'}} disableElevation >JavaScript</Button></a>
            </CardContent>
          </Card>

          <Card style={{margin: '40px'}}>
            <CardContent>
              <h1 className="ds">Stack</h1>
              <ul>
                <li>Access: O(n)</li>
                <li>Search: O(n)</li>
                <li>Insert: O(1)</li>
                <li>Delete: O(1)</li>
              </ul>
              <a href="https://github.com/Hi-Van/DSA-in-Python-and-JavaScript/blob/master/Stack.js" target="_blank" rel="noopener noreferrer"><Button variant="contained" color="secondary" size="large" style={{margin:'20px'}} disableElevation >JavaScript</Button></a>
            </CardContent>
          </Card>

          <Card style={{margin: '40px'}}>
            <CardContent>
              <h1 className="ds">Queue</h1>
              <ul>
                <li>Access: O(n)</li>
                <li>Search: O(n)</li>
                <li>Insert: O(1)</li>
                <li>Delete: O(1)</li>
              </ul>
              <a href="https://github.com/Hi-Van/DSA-in-Python-and-JavaScript/blob/master/Queue.js" target="_blank" rel="noopener noreferrer"><Button variant="contained" color="secondary" size="large" style={{margin:'20px'}} disableElevation >JavaScript</Button></a>
            </CardContent>
          </Card>
        </Box>

      </div>
    </div>
  );
}

export default App;
