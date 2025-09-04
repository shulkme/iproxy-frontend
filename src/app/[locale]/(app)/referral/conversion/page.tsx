import { Card, Table } from 'antd';

export default function Page() {
  return (
    <div className="p-8">
      <Card>
        <div>
          <Table
            scroll={{
              x: 1200,
            }}
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
    </div>
  );
}
