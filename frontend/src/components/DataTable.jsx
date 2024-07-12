import React from 'react';

function DataTable({ data }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Timestamp</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {data.map((entry) => (
                    <tr key={entry._id}>
                        <td>{new Date(entry.timestamp).toLocaleString()}</td>
                        <td>{entry.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default DataTable;