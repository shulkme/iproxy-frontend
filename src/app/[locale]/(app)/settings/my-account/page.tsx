import LoginLogs from '@/app/[locale]/(app)/settings/my-account/components/login-logs';
import UserInfo from '@/app/[locale]/(app)/settings/my-account/components/user-info';

export default function Page() {
  return (
    <div className="space-y-6">
      <UserInfo />
      <LoginLogs />
    </div>
  );
}
