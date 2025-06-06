export const calculateTime = (startDate: Date = new Date(), endDate?: Date) => {
    if (new Date(startDate) > new Date()) {
      const differenceInMilliseconds = new Date(startDate).getTime() - new Date().getTime();
  
      const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
      const seconds = differenceInSeconds % 60; // Seconds remaining after extracting minutes
      const differenceInMinutes = Math.floor(differenceInSeconds / 60);
      const minutes = differenceInMinutes % 60; // Minutes remaining after extracting hours
      const differenceInHours = Math.floor(differenceInMinutes / 60);
      const hours = differenceInHours % 24; // Hours remaining after extracting days
      const days = Math.floor(differenceInHours / 24);

      const final = `${days ? `${days}d` : ""} ${hours ? `${hours}h` : ""} ${
        minutes ? `${minutes}m` : ""
      } ${!days && seconds ? `${seconds}s` : ""}`;
  
      return (
        <div className='flex items-end gap-2'>
          <div className='text-title-active font-normal flex gap-1 items-center'>
            {/* <Watch /> Starting in: */}
          </div>
          <div className='text-title-active flex items-end  text-[15px] font-semibold'>{final}</div>
        </div>
      );
    }
  
    if (new Date(endDate as Date) > new Date()) {
      const differenceInMilliseconds = new Date(endDate as Date).getTime() - new Date().getTime();
  
      const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
      const seconds = differenceInSeconds % 60; // Seconds remaining after extracting minutes
      const differenceInMinutes = Math.floor(differenceInSeconds / 60);
      const minutes = differenceInMinutes % 60; // Minutes remaining after extracting hours
      const differenceInHours = Math.floor(differenceInMinutes / 60);
      const hours = differenceInHours % 24; // Hours remaining after extracting days
      const days = Math.floor(differenceInHours / 24);
  
      const final = `${days ? `${days}d` : ""} ${hours ? `${hours}h` : ""} ${
        minutes ? `${minutes}m` : ""
      } ${!days && seconds ? `${seconds}s` : ""}`;
  
      return (
        <div className='flex items-end gap-2'>
          <div className='text-title-active font-normal flex gap-1 items-end'>Time left:</div>
          <div className='text-title-active flex items-end  text-[15px] font-semibold'>{final}</div>
        </div>
      );
    }
  
    const final = new Date(endDate as Date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  
    return (
      <div className='flex items-end gap-2'>
        <div className='text-title-active font-normal flex gap-1 items-end'>Completed:</div>
        <div className='text-title-active flex items-end text-[16px] font-semibold'>{final}</div>
      </div>
    );
  };