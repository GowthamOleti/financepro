import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, Legend
} from 'recharts';
import { 
  Search, Bell, ChevronDown, Calendar, Download, Eye,
  LayoutDashboard, Users, UserPlus, UserCircle
} from 'lucide-react';

// Sample data
const balanceData = [
  { name: 'Jan', payables: 45000, receivables: 65000, balance: 20000 },
  { name: 'Feb', payables: 55000, receivables: 75000, balance: 25000 },
  { name: 'Mar', payables: 48000, receivables: 68000, balance: 22000 },
  { name: 'Apr', payables: 52000, receivables: 72000, balance: 24000 }
];

const paymentData = [
  { name: 'Jan', card: 30000, transfer: 25000, cash: 10000 },
  { name: 'Feb', card: 35000, transfer: 28000, cash: 12000 },
  { name: 'Mar', card: 32000, transfer: 26000, cash: 11000 },
  { name: 'Apr', card: 38000, transfer: 29000, cash: 13000 }
];

const activeClients = [
  { name: 'Acme Corp', contact: 'John Doe', balance: 125000 },
  { name: 'TechStart Inc', contact: 'Jane Smith', balance: 98000 },
  { name: 'Global Solutions', contact: 'Mike Johnson', balance: 87500 },
  { name: 'Innovation Labs', contact: 'Sarah Williams', balance: 76000 },
  { name: 'Future Systems', contact: 'Tom Brown', balance: 65000 }
];

const transactions = [
  { 
    id: 1,
    type: 'AP',
    name: 'Acme Corp',
    invoice: 'INV-2024-001',
    dueDate: '2024-04-25',
    amount: 12500,
    status: 'Posted',
    paymentMethod: 'Wire Transfer',
    discount: '4%'
  },
  { 
    id: 2,
    type: 'AR',
    name: 'TechStart Inc',
    invoice: 'INV-2024-002',
    dueDate: '2024-04-28',
    amount: 8750,
    status: 'Pending',
    paymentMethod: 'Credit Card',
    discount: '-'
  }
];

const Dashboard = () => {
  const [timeframe, setTimeframe] = useState('month');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="px-6 py-3 flex items-center justify-between">
          {/* Left Section: Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-[#083F6E]">FinancePro</div>
            <div className="flex space-x-6">
              <button className="flex items-center space-x-2 text-[#083F6E]">
                <LayoutDashboard className="h-5 w-5" />
                <span>Dashboard</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600">
                <Users className="h-5 w-5" />
                <span>Clients</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600">
                <UserPlus className="h-5 w-5" />
                <span>Add Client</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600">
                <UserCircle className="h-5 w-5" />
                <span>Profile</span>
              </button>
            </div>
          </div>

          {/* Right Section: Search and Profile */}
          <div className="flex items-center space-x-6">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-64"
              />
            </div>
            <Bell className="h-5 w-5 text-gray-600" />
            <div className="flex items-center space-x-2">
              <img
                src="/api/placeholder/32/32"
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
              <ChevronDown className="h-4 w-4 text-gray-600" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-6">
        {/* Summary Stats */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-sm text-gray-500 mb-2">Total Clients</div>
            <div className="text-2xl font-bold text-[#083F6E]">256</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-sm text-gray-500 mb-2">Active Clients</div>
            <div className="text-2xl font-bold text-[#008085]">198</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-sm text-gray-500 mb-2">Dormant Clients</div>
            <div className="text-2xl font-bold text-[#B51E3A]">58</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-sm text-gray-500 mb-2">Total Users</div>
            <div className="text-2xl font-bold text-[#FDC231]">45</div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Balance Chart */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Financial Overview</h2>
              <select 
                className="border border-gray-200 rounded-lg px-3 py-2"
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
              >
                <option value="day">Daily</option>
                <option value="week">Weekly</option>
                <option value="month">Monthly</option>
                <option value="year">Yearly</option>
              </select>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={balanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="payables" stroke="#B51E3A" name="Payables" />
                  <Line type="monotone" dataKey="receivables" stroke="#008085" name="Receivables" />
                  <Line type="monotone" dataKey="balance" stroke="#083F6E" name="Balance" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Payment Methods Chart */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Payment Methods</h2>
              <select 
                className="border border-gray-200 rounded-lg px-3 py-2"
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
              >
                <option value="day">Daily</option>
                <option value="week">Weekly</option>
                <option value="month">Monthly</option>
                <option value="year">Yearly</option>
              </select>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={paymentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="card" fill="#B51E3A" name="Card" />
                  <Bar dataKey="transfer" fill="#008085" name="Transfer" />
                  <Bar dataKey="cash" fill="#FDC231" name="Cash" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Active Clients */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Top Active Clients</h2>
            <button className="text-[#083F6E] hover:text-[#008085]">View All</button>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Client Name</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Contact Person</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">Current Balance</th>
              </tr>
            </thead>
            <tbody>
              {activeClients.map((client, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-3 px-4">{client.name}</td>
                  <td className="py-3 px-4">{client.contact}</td>
                  <td className="py-3 px-4 text-right">${client.balance.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Transactions */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Recent Transactions</h2>
            <div className="flex items-center space-x-4">
              <Calendar className="h-5 w-5 text-gray-400" />
              <Download className="h-5 w-5 text-gray-400" />
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Type</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Name</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Invoice</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Due Date</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">Amount</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Method</th>
                <th className="text-center py-3 px-4 text-sm font-medium text-gray-500">Discount</th>
                <th className="text-center py-3 px-4 text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-gray-100">
                  <td className="py-3 px-4">
                    <span className={inline-block px-2 py-1 rounded text-xs ${
                      transaction.type === 'AP' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                    }}>
                      {transaction.type}
                    </span>
                  </td>
                  <td className="py-3 px-4">{transaction.name}</td>
                  <td className="py-3 px-4">{transaction.invoice}</td>
                  <td className="py-3 px-4">{transaction.dueDate}</td>
                  <td className="py-3 px-4 text-right">${transaction.amount.toLocaleString()}</td>
                  <td className="py-3 px-4">
                    <span className={inline-block px-2 py-1 rounded text-xs ${
                      transaction.status === 'Posted' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                    }}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{transaction.paymentMethod}</td>
                  <td className="py-3 px-4 text-center">{transaction.discount}</td>
                  <td className="py-3 px-4 text-center">
                    <Eye className="h-5 w-5 text-gray-400 inline-block cursor-pointer hover:text-[#083F6E]" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-6">
        <div className="px-6 py-4 text-center text-sm text-gray-500">
          © 2024 FinancePro. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
