import { Card, Table } from 'antd';

export default function Page() {
  return (
    <>
      <Card>
        <div>
          <Table
            columns={[
              {
                title: 'Conversion traffic (GB)',
              },
              {
                title: 'Pay commission',
              },
              {
                title: 'Remaining commission',
              },
              {
                title: 'Payment time',
              },
            ]}
          />
        </div>
      </Card>
    </>
  );
}
