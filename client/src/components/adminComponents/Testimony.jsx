import TestimonyCard from "./TestimonyCard";

export default function Testimony({ testy, deleteTest, updateTesty, approveTest }) {
  
      return (
    <div className="max-w-5xl mx-auto p-4">
      
  
      {testy.length > 0 ? (
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
         
          
          {testy.map(test => (
            <TestimonyCard
              key={test._id}
              testy={test}
              deleteTest={deleteTest}
              approveTest={() => approveTest(test._id, test.approved)}
            />
          ))}

        </section>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">No Testimonies found</p>
        </div>
      )}
    </div>
  );
}

