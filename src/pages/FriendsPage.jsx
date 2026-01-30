import React from 'react';

const FriendsPage = () => {
  const friendRequests = [
    {
      id: 1,
      name: 'Sarah Johnson',
      time: '2d',
      mutualFriends: 18,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTwR7YkKqEKOeAxQZvgJRq2lvSiHMKiWeKfDJ4s3PfLhc27RjR4O0RAIRCdF4quMyGHdIY86rogaNq-sowIEl1t3lYC4MkY2DoY52ey_loK_t4X5eqiF8erxWDYUrwINjAWgrQgvI_OHIWs4z_6wYtYKn2gAzUAF48a7XWHvSb2Ih0oEPNdy_lhu1cqUWz9NXq8lv-dGwBvhKRDkByOmI88Xw9OKJQKXSG5wRGUNxIed1AUngCRDnOmEMYbDM6rEEaAqv3fcmkVXk'
    },
    {
      id: 2,
      name: 'Marcus Chen',
      time: '5h',
      mutualFriends: 4,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD87ffd-S_DA_jSpmYqkC_dnRlDyvjbAvAAQNuTO7_fOnIObT46Xn8cX6Ia-9txOKPkFx88m8Iz2UuZhTXwS9NirCh_rT7clbUfDt8Nh_BAGY-UGRXeMZg-yXgWylEDfYH5xU0fFHDEvIJDNWjlxyCGIxA70caUW7uUYfMXxYcyKKpzB9yfuA9GZAsS83OArIg74Cw9OA4FpHi6lWLpTCWQI94zLOqxmS-C2dAPXDNFp5Tf9X4CF0qiBUlxDO3AHwzcZIob-Ce7sHk'
    }
  ];

  const suggestedFriends = [
    {
      id: 1,
      name: 'Elena Rodriguez',
      mutualConnections: 12,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwfak8PN8hDJewE_G0UDNMK1CZtNXJ2dPwS-dH4h-GZTCXBsgGQE0dI-PQJ0609XUCFDGVgo7kjtVX-IufObPy7Ov5cmg7Dvaouz6vPmdCPWpTTY8qKtXPS0dGXCQLmBbpV8lr94KluO3IAt5Wkewr4x5HJBemwbvkFXO5VH19pP5ZoT_YmiCATyZQtCUOurnVzNtNgbx3A5Uj29fG0bdWXFWPm9RYW84HESt6TcJIzAc3NbO7ocpU11cNYfTeFQ0PqYjB6HkXhh4'
    },
    {
      id: 2,
      name: 'David Kim',
      mutualConnections: 8,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDS0ioZ5KGRJHBMNQMQuQ1Zd4KhqAEKIXNTx7eXYFvgB4DLBXuMBPiY_m1thIgTP4BCiAsH-IN2a0YBJmgbQQZBhuHHrVgKM3aRN0sCeC0n0jfQ_FjGKzZgNqjQ_2Z0Bc6yT9bvRsN2GY3JS2jsED0RdFN2iA9ocC1nJrFCnrrNkBRuFD4UuTsv3unGls6w_QwDa1KaNC4TLklzrlazWkhDulembQzwkLxTP9JSwUC1gugt3yTewMt2m3uO3rJfjo8ESDPy4hbppFg'
    },
    {
      id: 3,
      name: 'Jordan Smith',
      mutualConnections: 22,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-CFg0KFSGF1SXZlOII-mHsppH66RRGFpZZ_cvXoa08fG0sK321Y65laY8CPVKiUxuEZJhM-4rPnuPXIVy4lxt9CBjvlxu0bMhhZNOCzZB9jbiMdt7qVvUWsKJtEu5J_cJ9zIFTw3DznkGPOBgW0inSUeqSiusfmd04vI6dne1wVCbFkRvTv249oz9FEaTx2i0aOXErrre6d1xn1IKnklnHxTsZ60Jh5fnN34o1MLd0tXj7gn095uoUKyacRXgZayWxSBuHcUIMoU'
    },
    {
      id: 4,
      name: 'Taylor Swiftly',
      mutualConnections: 3,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-ylwQvki94pe5zHC7sXOJNNpEVK-74j-qPcD8pYYVXobHUMix4jeowbjOYwPqmLqP6lTT6XE6tEP4YYDhrYSB4ALGRdCKgPJNhX1rcOi3HwibiJ-8ReCGJzo4BNX2pvqWXeSErAR3GpxOo-WMXi4zv66q5QguVkxVNYz9-HNXQAPYim22K_xyKZGo5dmGD9nvYWS2fWUGBa2GaxklZfLt43f1ZzfPKqMYWqtiGWIjOEAcNKm2ZtSQxarh6Q9uk1jKoDx3w9ursLA'
    }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0e171b] dark:text-white min-h-screen pb-24">
      {/* Top App Bar */}
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 ios-blur px-4 pt-4 pb-2">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-800 tracking-tight text-[#0e171b] dark:text-white">Friends</h1>
            <div className="flex gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 text-primary">
                <span className="material-symbols-outlined text-[24px]">person_add</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 text-primary">
                <span className="material-symbols-outlined text-[24px]">settings</span>
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="pb-2">
            <label className="flex flex-col min-w-40 h-12 w-full">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <div className="text-[#508495] dark:text-[#a0c4d1] flex border-none bg-[#e8f0f3] dark:bg-[#2d3a40] items-center justify-center pl-4 rounded-l-xl border-r-0">
                  <span className="material-symbols-outlined text-[22px]">search</span>
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e171b] dark:text-white focus:outline-0 focus:ring-0 border-none bg-[#e8f0f3] dark:bg-[#2d3a40] focus:border-none h-full placeholder:text-[#508495] dark:placeholder:text-[#a0c4d1] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  placeholder="Search friends"
                />
              </div>
            </label>
          </div>
        </div>
      </header>

      <main className="px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Left Column - Friend Requests */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em]">Friend Requests</h2>
              <button className="text-primary text-sm font-semibold">See All</button>
            </div>

            <div className="space-y-3">
              {friendRequests.map((request) => (
                <div
                  key={request.id}
                  className="flex items-center gap-4 bg-white dark:bg-[#25252b] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow"
                >
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-16 w-16 shrink-0"
                    style={{ backgroundImage: `url("${request.avatar}")` }}
                  />
                  <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <p className="text-[#0e171b] dark:text-white text-base font-bold leading-tight truncate">{request.name}</p>
                      <span className="text-[10px] text-[#508495] font-medium">{request.time}</span>
                    </div>
                    <p className="text-[#508495] dark:text-[#a0c4d1] text-xs font-normal leading-normal mb-2">
                      {request.mutualFriends} mutual friends
                    </p>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-primary text-white text-sm font-bold py-2 rounded-lg hover:bg-primary/90 transition-colors">
                        Confirm
                      </button>
                      <button className="flex-1 bg-[#e8f0f3] dark:bg-[#2d3a40] text-[#0e171b] dark:text-white text-sm font-bold py-2 rounded-lg hover:opacity-80 transition-opacity">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - People You May Know */}
          <div className="lg:col-span-1">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em]">People You May Know</h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 pb-8">
              {suggestedFriends.map((friend) => (
                <div
                  key={friend.id}
                  className="bg-white dark:bg-[#25252b] rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col lg:flex-row hover:shadow-md transition-shadow"
                >
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover w-full lg:w-24 lg:h-24"
                    style={{ backgroundImage: `url("${friend.avatar}")` }}
                  />
                  <div className="p-3 flex flex-col flex-1">
                    <p className="text-[#0e171b] dark:text-white text-sm font-bold truncate">{friend.name}</p>
                    <p className="text-[#508495] dark:text-[#a0c4d1] text-[11px] mb-3">
                      {friend.mutualConnections} mutual connections
                    </p>
                    <button className="mt-auto bg-primary/10 dark:bg-primary/20 text-primary text-sm font-bold py-2 rounded-lg flex items-center justify-center gap-1 hover:bg-primary/20 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">person_add</span>
                      Add Friend
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Floating Action Button - Hidden on Desktop */}
      <button className="lg:hidden fixed bottom-28 right-6 bg-primary text-white px-6 py-4 rounded-full shadow-xl flex items-center gap-2 font-bold transform transition-transform hover:scale-105 active:scale-95 z-40">
        <span className="material-symbols-outlined text-[24px]">share</span>
        Invite Friends
      </button>

      {/* Bottom Navigation Bar - Hidden on Desktop */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-background-dark/90 ios-blur border-t border-gray-200 dark:border-gray-800 px-6 py-3 flex justify-between items-center z-50">
        <div className="flex flex-col items-center gap-1 text-[#508495]">
          <span className="material-symbols-outlined text-[26px]">home</span>
          <span className="text-[10px] font-medium">Home</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined text-[26px] font-bold">group</span>
          <span className="text-[10px] font-bold">Friends</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-[#508495]">
          <span className="material-symbols-outlined text-[26px]">add_box</span>
          <span className="text-[10px] font-medium">Create</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-[#508495]">
          <span className="material-symbols-outlined text-[26px]">notifications</span>
          <span className="text-[10px] font-medium">Alerts</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-[#508495]">
          <div
            className="w-7 h-7 rounded-full bg-cover bg-center border-2 border-transparent"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCHrdILgqr8pRvJZbDFXfsE9cKl35Gt5q8uic2U1GHkoT-8UqEXLHsdG3zNBXzSzXFTVJO3x08uhQAO4M3-T4TxCvdOn8BGnQmOoIFgEXXrTkQK3IefcYVsYIqJrchvJmUeP8rqELwFRcNBF2oYbPj-scS_xXKivrhhqCs7UJ7qH77a7b7vYjd3GCRdKXq03DGXr6jtWh02Nhgfh4Z2Ay7k6gVOR7TzKdxai2Ekd4zZWZm9xEQ_A4FB6rTjzq6uI5qRg0LddI-ix6Q")' }}
          />
          <span className="text-[10px] font-medium">Me</span>
        </div>
      </nav>
    </div>
  );
};

export default FriendsPage;
