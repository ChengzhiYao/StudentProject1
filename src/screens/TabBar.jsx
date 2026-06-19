function HomeIcon() {
  return (
    <svg className="ico" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  )
}

function ProfileIcon() {
  return (
    <svg className="ico" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4a3.2 3.2 0 110 6.4A3.2 3.2 0 0112 6zm0 14a7.9 7.9 0 01-6-2.8c.1-2.1 4-3.2 6-3.2s5.9 1.1 6 3.2A7.9 7.9 0 0112 20z" />
    </svg>
  )
}

export default function TabBar({ active, onHome, onProfile }) {
  return (
    <div className="tabbar">
      <div className={'tab' + (active === 'home' ? ' active' : '')} onClick={onHome}>
        <HomeIcon />
        Home
      </div>
      <div className={'tab' + (active === 'profile' ? ' active' : '')} onClick={onProfile}>
        <ProfileIcon />
        Profile
      </div>
    </div>
  )
}
