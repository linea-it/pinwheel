import React from 'react';
import { useParams } from 'react-router-dom';
import CustomTable from '../../components/Table';

const columns = [
  {
    field: 'name',
    header: 'Name',
    name: 'name',
    title: 'Name',
    style: {
      textAlign: 'left',
      paddingLeft: '20px',
    },
    width: 300,
  },
  {
    field: 'version',
    header: 'Version',
    name: 'version',
    title: 'Version',
    width: 300,
  },
  {
    field: 'last_version',
    header: 'Last Version',
    name: 'last_version',
    title: 'Last Version',
    width: 300,
  },
];

function ProcessSummary() {
  const { id } = useParams();

  return (
    <div>
      <CustomTable
        // eslint-disable-next-line react/prop-types
        data={[]}
        columns={columns}
        remote={false}
        pageSize={5}
        pageSizes={[5, 15, 50, 100, 500]}
        // eslint-disable-next-line react/prop-types
        // totalCount={this.props.versionProcess.length}
        reload={false}
        hasSearching={false}
        hasToolbar={false}
        hasPagination={false}
        hasColumnVisibility={false}
      />
      <h1>{`Process Summary - Process ${id}`}</h1>
    </div>
  );
}

export default ProcessSummary;
