import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { revenue, invoices, customers } from '@/app/lib/placeholder-data';
import { Suspense } from 'react';
import {
    LatestInvoicesSkeleton,
    RevenueChartSkeleton,
    CardsSkeleton
} from '@/app/ui/skeletons';
import { LatestInvoice } from '@/app/lib/definitions';

export default async function Page() {

    //     const {
    //         totalPaidInvoices,
    //         totalPendingInvoices,
    //         numberOfInvoices,
    //         numberOfCustomers,
    //     } = await fetchCardData();

    // Sort by date descending and take latest 5
    const latestInvoices: LatestInvoice[] = invoices
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 5)
        .map((invoice, index) => {
            const customer = customers.find((c) => c.id === invoice.customer_id);
            return {
                id: index.toString(),
                name: customer?.name ?? 'Unknown',
                email: customer?.email ?? '',
                image_url: customer?.image_url ?? '',
                amount: `$${(invoice.amount / 100).toFixed(2)}`,
            };
        });

    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Card title="Collected" value={totalPaidInvoices} type="collected" />
                <Card title="Pending" value={totalPendingInvoices} type="pending" />
                <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
                <Card title="Total Customers" value={numberOfCustomers} type="customers" />
            </div> */}
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<CardsSkeleton />}>
                    <CardWrapper />
                </Suspense>
                <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart revenue={revenue} />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices latestInvoices={latestInvoices} />
                </Suspense>
            </div>
        </main>
    );
}
