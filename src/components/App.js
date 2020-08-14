import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import { render } from '@testing-library/react';

class App extends React.Component {
    async onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID rhNZ8nlRBBdFjsIPgxKxjNE_QLSd6q3m0MPLbRmYD8Y'
            }
        });

        console.log(response.data.results);
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '24px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;