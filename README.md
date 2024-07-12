# Real-Time Stock/Crypto Data Collection and Display

This project is a mini-website designed to collect and display real-time price data for selected stocks and cryptocurrencies. It features a backend that fetches data from an API and stores it in MongoDB, and a frontend that displays the data in a dynamically updating table.

## Features

- **Real-Time Data Fetching**: Polls real-time data every few seconds for selected stocks or cryptocurrencies.
- **MongoDB Integration**: Stores the fetched data in a MongoDB database.
- **Dynamic Frontend**: Displays the most recent 20 data entries in a table, which updates in real-time.
- **Stock/Crypto Selection**: Allows users to select different stocks or cryptocurrencies to view their data.
- **Secure Configuration**: Uses environment variables to securely store sensitive information like the MongoDB URI.

## Project Structure

```bash
backend-dev-realtime-stock
├── backend
│   ├── index.js
│   ├── .env
│   ├── models
│   │   └── StockData.js
│   └── routes
│       └── data.js
├── frontend
│   ├── package.json
│   ├── vite.config.js
│   └── src
│       ├── App.jsx
│       ├── index.js
│       ├── components
│       │   └── DataTable.jsx
│       └── styles
│           └── App.css
└── .gitignore
```

## How I Did This

Despite having only basic knowledge of Express, MongoDB, JavaScript, and React, I was able to accomplish this project by focusing on logic and step-by-step integration. Here’s a breakdown of the steps I followed:

1. **Backend Setup**:
    - Initialized a Node.js project.
    - Set up an Express server.
    - Connected to MongoDB using Mongoose.
    - Used Axios to fetch real-time data from the CoinGecko API.
    - Stored the fetched data in MongoDB.

2. **Frontend Setup**:
    - Created a React project using Create React App.
    - Built components to fetch and display data from the backend.
    - Used CSS Flexbox to center elements and ensure a responsive design.

3. **Security**:
    - Used environment variables to securely store the MongoDB URI.
    - Added a `.gitignore` file to exclude sensitive files and directories from version control.

## Installation and Setup

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB instance running locally or remotely.
- Git for version control.

### Backend Setup

1. Clone the repository:

    ```sh
    git clone https://github.com/WankhedeAmey/backend-dev-realitime-stock.git
    cd backend-dev-realitime-stock
    ```

2. Navigate to the `backend` directory and install dependencies:

    ```sh
    cd backend
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add your MongoDB URI:

    ```env
    MONGO_URI=mongodb://your_mongo_uri_here
    ```

4. Start the backend server:

    ```sh
    node index.js
    ```

### Frontend Setup

1. Navigate to the `frontend` directory and install dependencies:

    ```sh
    cd ../frontend
    npm install
    ```

2. Start the frontend development server:

    ```sh
    npm run dev
    ```

### Testing the Application

1. Ensure your MongoDB instance is running.
2. Start the backend server as described in the Backend Setup section.
3. Start the frontend server as described in the Frontend Setup section.
4. Open your browser and navigate to `http://localhost:5173` to view the application.

### Project Simplicity

The project maintains simplicity by focusing on core functionality and clean, modular code. The separation of concerns between backend and frontend, along with clear directory structures, makes it easy to understand and extend. Using environment variables for configuration ensures that sensitive information is not exposed, and including a detailed `.gitignore` file helps maintain a clean codebase.

## Conclusion

This project demonstrates how, with basic knowledge and a logical approach, one can build a functional web application that integrates real-time data fetching, database storage, and dynamic front-end display. The key is to break down the tasks into manageable steps and focus on one component at a time.

Feel free to explore the code, test the application, and extend its features. Contributions and feedback are welcome!
