const Announcements = () => {
    const announcements = [
      {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur doloremque exercitationem veritatis dolores obcaecati natus!",
        date: "2025-01-01",
        bgColor: "bg-lamaSkyLight"
      },
      {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur doloremque exercitationem veritatis dolores obcaecati natus!",
        date: "2025-01-01",
        bgColor: "bg-lamaPurpleLight"
      },
      {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur doloremque exercitationem veritatis dolores obcaecati natus!",
        date: "2025-01-01",
        bgColor: "bg-lamaYellowLight"
      },
      {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur doloremque exercitationem veritatis dolores obcaecati natus!",
        date: "2025-01-01",
        bgColor: "bg-lamaSky"
      }
    ];
  
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-gray-800">
            Announcements
          </h1>
          <button className="text-xs md:text-sm text-gray-400">
            View All
          </button>
        </div>
  
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
          {announcements.map((announcement, index) => (
            <div
              key={index}
              className={`${announcement.bgColor} rounded-lg p-4`}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <h2 className="font-medium line-clamp-2 text-sm md:text-base text-gray-600 flex-1">
                  {announcement.text}
                </h2>
                <span className="text-xs md:text-sm text-gray-500 bg-white rounded-md px-3 py-1 whitespace-nowrap shadow-sm">
                  {announcement.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Announcements;