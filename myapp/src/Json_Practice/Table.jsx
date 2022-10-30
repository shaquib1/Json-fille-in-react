import React from 'react'
import JsonData from './Data.json'

function JsonDataDisplay() {
    const DisplayData = JsonData.map(
        (data) => {
            return (
                <tr>
                    <td>{data.RegisterNumber}</td>
                    <td>{data.Branch}</td>
                    <td>{data.Name}</td>
                </tr>
            )
        }
    )

    return (
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>RegisterNumber</th>
                        <th>Branch</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>


                    {DisplayData}

                </tbody>
            </table>

        </div>
    )
}

export default JsonDataDisplay;
