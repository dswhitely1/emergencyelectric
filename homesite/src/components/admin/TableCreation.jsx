import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

class TableCreation extends Component {
	renderList() {
		const { tHeader, tData } = this.props;
		return (
			<Table bordered responsive size='sm'>
				<thead className='thead-dark'>
					<tr>
						{tHeader.map((header, i) => {
							return (
								<th scope='col' key={i}>
									{header}
								</th>
							);
						})}
					</tr>
				</thead>
				<tbody>
					<tr>
						{tData.map((data, i) => {
							return <td key={`td-${i}`}>{data}</td>;
						})}
					</tr>
				</tbody>
			</Table>
		);
	}
	render() {
		return this.renderList();
	}
}

export default TableCreation;
