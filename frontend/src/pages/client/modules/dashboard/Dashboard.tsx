/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// DEPENDENCIES
import { Layout } from '@/components/layout/layout'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Overview } from './view/overview'
import { RecentSales } from './view/recent-sales'
import { Charts } from './view/analytics'
import { ReportPage } from './view/reports'
import CustomerReviews from './view/CustomerReviews'
import InventoryManagement from './view/InventoryManagement'
import MarketingCampaigns from './view/MarketingCampaigns'
import StoreLocations from './view/StoreLocations'
import SupplierManagement from './view/SupplierManagement'

export default function Dashboard() {
  return (
    <Layout fixed>
      <Layout.Body>
        <div className='mb-2 flex items-center justify-between space-y-2'>
          <h1 className='text-2xl font-bold tracking-tight'>Dashboard</h1>
        </div>
        <Tabs
          className='space-y-4'
          defaultValue='overview'
          orientation='vertical'
        >
          <div className='w-full overflow-x-auto pb-2'>
            <TabsList>
              <TabsTrigger value='overview'>Overview</TabsTrigger>
              <TabsTrigger value='analytics'>Analytics</TabsTrigger>
              <TabsTrigger value='reports'>Reports</TabsTrigger>
              <TabsTrigger value='notifications'>Notifications</TabsTrigger>
              <TabsTrigger value='customerReviews'>CustomerReviews</TabsTrigger>
              <TabsTrigger value='inventoryManagement'>InventoryManagement</TabsTrigger>
              <TabsTrigger value='marketingCampaigns'>MarketingCampaigns</TabsTrigger>
              <TabsTrigger value='storeLocations'>StoreLocations</TabsTrigger>
              <TabsTrigger value='supplierManagement'>SupplierManagement</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent className='space-y-4' value='overview'>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-2xl font-bold'>
                    Total Revenue
                  </CardTitle>
                  <svg
                    className='h-4 w-4 text-muted-foreground'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>$45,231.89</div>
                  <p className='text-xs text-muted-foreground'>
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>
                    Subscriptions
                  </CardTitle>
                  <svg
                    className='h-4 w-4 text-muted-foreground'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
                    <circle cx='9' cy='7' r='4' />
                    <path d='M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>+2350</div>
                  <p className='text-xs text-muted-foreground'>
                    +180.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>Sales</CardTitle>
                  <svg
                    className='h-4 w-4 text-muted-foreground'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect height='14' rx='2' width='20' x='2' y='5' />
                    <path d='M2 10h20' />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>+12,234</div>
                  <p className='text-xs text-muted-foreground'>
                    +19% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>
                    Active Now
                  </CardTitle>
                  <svg
                    className='h-4 w-4 text-muted-foreground'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>+573</div>
                  <p className='text-xs text-muted-foreground'>
                    +201 since last hour
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-7'>
              <Card className='col-span-1 lg:col-span-4'>
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className='pl-2'>
                  <Overview />
                </CardContent>
              </Card>
              <Card className='col-span-1 lg:col-span-3'>
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent className='space-y-4' value='analytics'>
            <Charts />
          </TabsContent>
          <TabsContent className='space-y-4' value='reports'>
            <ReportPage />
          </TabsContent>
          <TabsContent className='space-y-4' value='customerReviews'>
            <CustomerReviews />
          </TabsContent>
          <TabsContent className='space-y-4' value='inventoryManagement'>
            <InventoryManagement />
          </TabsContent>
          <TabsContent className='space-y-4' value='marketingCampaigns'>
            <MarketingCampaigns />
          </TabsContent>
          <TabsContent className='space-y-4' value='storeLocations'>
            <StoreLocations />
          </TabsContent>
          <TabsContent className='space-y-4' value='supplierManagement'>
            <SupplierManagement />
          </TabsContent>
        </Tabs>
      </Layout.Body>
    </Layout>
  )
}



