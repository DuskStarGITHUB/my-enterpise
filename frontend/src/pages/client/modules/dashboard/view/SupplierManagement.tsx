/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-duplicate-imports */
// DEPENDENCIES
import type { JSX} from "react";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Trash2, Package } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/layout/sidebar/code/button";

// VIEW
interface Supplier {
  id: string;
  name: string;
  contact: string;
  email: string;
  phone: string;
  products: Array<string>;
  status: "Active" | "Inactive";
  lastOrderDate: Date;
}

const initialSuppliers: Array<Supplier> = [
  {
    id: "1",
    name: "ShoeMax Inc.",
    contact: "John Smith",
    email: "john@shoemax.com",
    phone: "(555) 123-4567",
    products: ["Running Shoes", "Sneakers"],
    status: "Active",
    lastOrderDate: new Date(2023, 5, 15),
  },
  {
    id: "2",
    name: "Sole Providers LLC",
    contact: "Jane Doe",
    email: "jane@soleproviders.com",
    phone: "(555) 987-6543",
    products: ["Hiking Boots", "Sandals"],
    status: "Active",
    lastOrderDate: new Date(2023, 5, 20),
  },
  {
    id: "3",
    name: "Lace Masters Co.",
    contact: "Bob Johnson",
    email: "bob@lacemasters.com",
    phone: "(555) 246-8135",
    products: ["Shoelaces", "Insoles"],
    status: "Inactive",
    lastOrderDate: new Date(2023, 4, 10),
  },
];

export default function SupplierManagement(): JSX.Element {
  const [suppliers, setSuppliers] = useState<Array<Supplier>>(initialSuppliers);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newSupplier, setNewSupplier] = useState<
    Omit<Supplier, "id" | "lastOrderDate">
  >({
    name: "",
    contact: "",
    email: "",
    phone: "",
    products: [],
    status: "Active",
  });
  const filteredSuppliers = suppliers.filter(
    (supplier) =>
      supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.products.some((product) =>
        product.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );
  const handleAddSupplier = () => {
    const newId = (
      Math.max(...suppliers.map((supplier) => parseInt(supplier.id))) + 1
    ).toString();
    setSuppliers([
      ...suppliers,
      { ...newSupplier, id: newId, lastOrderDate: new Date() },
    ]);
    setIsAddDialogOpen(false);
    setNewSupplier({
      name: "",
      contact: "",
      email: "",
      phone: "",
      products: [],
      status: "Active",
    });
  };
  const handleDeleteSupplier = (id: string) => {
    setSuppliers(suppliers.filter((supplier) => supplier.id !== id));
  };
  const handleStatusChange = (id: string, newStatus: "Active" | "Inactive") => {
    setSuppliers(
      suppliers.map((supplier) =>
        supplier.id === id ? { ...supplier, status: newStatus } : supplier
      )
    );
  };
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Supplier Management</h1>
      <div className="flex justify-between mb-4">
        <div className="relative w-64">
          <Search className="absolute left-2 top-3 h-4 w-4 text-gray-400" />
          <Input
            className="pl-8"
            placeholder="Search suppliers..."
            type="text"
            value={searchTerm}
            onChange={(e) => { setSearchTerm(e.target.value); }}
          />
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Supplier
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Supplier</DialogTitle>
              <DialogDescription>
                Enter the details for the new supplier.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="name">
                  Name
                </Label>
                <Input
                  className="col-span-3"
                  id="name"
                  value={newSupplier.name}
                  onChange={(e) =>
                    { setNewSupplier({ ...newSupplier, name: e.target.value }); }
                  }
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="contact">
                  Contact
                </Label>
                <Input
                  className="col-span-3"
                  id="contact"
                  value={newSupplier.contact}
                  onChange={(e) =>
                    { setNewSupplier({ ...newSupplier, contact: e.target.value }); }
                  }
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="email">
                  Email
                </Label>
                <Input
                  className="col-span-3"
                  id="email"
                  type="email"
                  value={newSupplier.email}
                  onChange={(e) =>
                    { setNewSupplier({ ...newSupplier, email: e.target.value }); }
                  }
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="phone">
                  Phone
                </Label>
                <Input
                  className="col-span-3"
                  id="phone"
                  type="tel"
                  value={newSupplier.phone}
                  onChange={(e) =>
                    { setNewSupplier({ ...newSupplier, phone: e.target.value }); }
                  }
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="products">
                  Products
                </Label>
                <Input
                  className="col-span-3"
                  id="products"
                  value={newSupplier.products.join(", ")}
                  onChange={(e) =>
                    { setNewSupplier({
                      ...newSupplier,
                      products: e.target.value.split(", "),
                    }); }
                  }
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleAddSupplier}>Add Supplier</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Products</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Order</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredSuppliers.map((supplier) => (
            <TableRow key={supplier.id}>
              <TableCell>{supplier.name}</TableCell>
              <TableCell>{supplier.contact}</TableCell>
              <TableCell>{supplier.email}</TableCell>
              <TableCell>{supplier.phone}</TableCell>
              <TableCell>{supplier.products.join(", ")}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    supplier.status === "Active" ? "outline" : "secondary"
                  }
                >
                  {supplier.status}
                </Badge>
              </TableCell>
              <TableCell>
                {supplier.lastOrderDate.toLocaleDateString()}
              </TableCell>
              <TableCell className="flex items-center">
                <Select
                  value={supplier.status}
                  onValueChange={(value: "Active" | "Inactive") =>
                    { handleStatusChange(supplier.id, value); }
                  }
                >
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
                <Button size="sm" variant="ghost">
                  <Package className="h-4 w-4 mr-2" /> Order
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => { handleDeleteSupplier(supplier.id); }}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
