import ListCard from '@/app/[locale]/(app)/partners/components/list-card';
import { AntdTitle } from '@/components/antd';

export default function Page() {
  return (
    <div className="max-w-[1600px] mx-auto p-8">
      <div>
        <AntdTitle level={4}>Anti-Detection Browsers</AntdTitle>
        <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(300px,_1fr))]">
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
        </div>
      </div>
    </div>
  );
}
