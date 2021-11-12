import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';
import Link from './Link';

const Search = () => {
    const [searchFilter, setSearchFilter] = useState('');
    return (
        <>
        <div>
            Search 
            <input 
                type='text'
                onChange={(e) => setSearchFilter(e.target.value)}
            />
            <button>OK</button>
        </div>
        {data &&
            data.feed.links.map((link, idx) => (
                <Link key={link.id} link={link} index={idx} />
            ))}
        </>
    );
};

export default Search;