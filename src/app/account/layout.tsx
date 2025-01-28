import SideNavigation from '@/app/_components/SideNavigation'

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-full gap-12 w-full">
      <div className="w-64">
        <SideNavigation />
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  )
}
