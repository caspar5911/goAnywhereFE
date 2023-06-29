import React, { useState } from 'react';
import axios from 'axios';

const MyComponent: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [responseText, setResponseText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/chat', { input: inputText });
      console.log(response);
      setResponseText(response.data.response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // const handlePostRequest = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:8080/api/chat', {
  //       data: 'Hello, backend!',
  //     });
  //     setInputText(response.data);
  //   } catch (error) {
  //     console.error(error);
  //     setInputText('An error occurred.');
  //   }
  // };

  return (
    <div>
      {/* <button onClick={handlePostRequest}>Send POST Request</button> */}
      {/* <p>{inputText}</p> */}
      <h1>ChatGPT Itinerary Planner</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputText} onChange={handleInputChange} />
        <button type="submit">Send</button>
      </form>
      <div>
        <h2>Response:</h2>
        <p>{responseText}</p>
      </div>
    </div>
    
    
    
  );
};

export default MyComponent;



// import React, { useState } from 'react';
// import axios from 'axios';

// const ChatComponent: React.FC = () => {
//   const [inputText, setInputText] = useState('');
//   const [responseText, setResponseText] = useState('');

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInputText(e.target.value);
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/api/chat', { input: inputText });
//       setResponseText(response.data.response);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>ChatGPT Itinerary Planner</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={inputText} onChange={handleInputChange} />
//         <button type="submit">Send</button>
//       </form>
//       <div>
//         <h2>Response:</h2>
//         <p>{responseText}</p>
//       </div>
//     </div>
//   );
// };

// export default ChatComponent;
