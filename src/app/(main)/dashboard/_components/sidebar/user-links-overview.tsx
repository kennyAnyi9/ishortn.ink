type UserLinksOverViewProps = {
  numberOfLinks: number;
  numberOfClicks: number;
};

const UserLinksOverView = ({ numberOfLinks, numberOfClicks }: UserLinksOverViewProps) => {
  return (
    <div className="flex h-max flex-col gap-4 rounded-md bg-gray-100/65 p-6 dark:bg-[#1B1B1B]">
      <div>
        <h1 className="text-xl font-semibold leading-tight">Quick Stats</h1>
        <p className="text-sm text-muted-foreground">Get a quick overview of your links</p>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between gap-2 rounded-md">
          <span className="text-xl font-semibold">Total Links</span>
          <span className="text-5xl text-muted-foreground">{numberOfLinks}</span>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-xl font-semibold">Total Clicks</span>
          <span className="text-5xl text-muted-foreground">{numberOfClicks}</span>
        </div>
      </div>
    </div>
  );
};

export { UserLinksOverView };
