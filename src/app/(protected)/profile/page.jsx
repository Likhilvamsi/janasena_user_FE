'use client'
import { useProfile } from '@/hooks/profile/useProfile';
import ConstituencyInfoCard from '../../components/ConstituencyInfoCard'
import ProfileActionsList from '../../components/ProfileActionsList'
import ProfileCard from '../../components/ProfileCard'
export default function ProfilePage() {
  const {profile}= useProfile();
  return (
    <div className="space-y-6 p-4 sm:p-6">  
      <ProfileCard profile={profile} />
      <ConstituencyInfoCard profile={profile} />
      <ProfileActionsList />
    </div>
  )
}




