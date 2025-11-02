import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { bills, members } from "@/lib/data";

const getStatusVariant = (status: "Paid" | "Due" | "Overdue") => {
  switch (status) {
    case 'Paid':
      return 'default';
    case 'Due':
      return 'secondary';
    case 'Overdue':
      return 'destructive';
  }
}

export default function MemberBillingPage() {
  const currentMember = members[0]; // Mock user
  const memberBills = bills.filter((bill) => bill.memberId === currentMember.id);

  return (
    <Card>
      <CardHeader>
        <CardTitle>My Billing History</CardTitle>
        <CardDescription>A record of all your payments and bills.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Package</TableHead>
              <TableHead>Bill Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {memberBills.length > 0 ? (
              memberBills.map((bill) => (
                <TableRow key={bill.id}>
                  <TableCell className="font-medium">{bill.packageName}</TableCell>
                  <TableCell>{new Date(bill.date).toLocaleDateString()}</TableCell>
                  <TableCell>${bill.amount.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(bill.status)}>{bill.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    {bill.status === 'Paid' ? (
                      <Button variant="outline" size="sm">View Receipt</Button>
                    ) : (
                      <Button size="sm" className="bg-accent hover:bg-accent/90">Pay Now</Button>
                    )}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  You have no billing history.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
