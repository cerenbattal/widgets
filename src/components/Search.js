import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Search() {
    const [term, setTerm] = useState('');

    useEffect(() => {
        const search = async () => {
            await axios.get(term);
        };
        search();
    }, [term])

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        value={term}
                        onChange={(e) => {
                            setTerm(e.target.value)
                        }}
                        className="input" 
                    />
                </div>
            </div>
        </div>
    )
}
