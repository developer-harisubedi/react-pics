import React from 'react';

class SearchBar extends React.Component {
state = {term:''};



    render() {
        return (
            <div className='ui segment'>
                <form className='ui form'>
                    <div className='field'>
                        <label>Search Image</label>
                        <input type="text" value={this.state.term} onChange={e => this.setState({tetm: e.target.value})} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;