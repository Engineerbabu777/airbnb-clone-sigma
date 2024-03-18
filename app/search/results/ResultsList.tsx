import InfoCard from "../components/InfoCard";

const ResultsList = ({data}:{ data:any }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      {data?.map((listing:any) => (
        <InfoCard listing={listing} key={listing.id} />
      ))}
    </div>
  );
};


export default ResultsList