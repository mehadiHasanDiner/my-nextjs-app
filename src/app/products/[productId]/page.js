const DynamicProductPage = ({params, searchParams}) => {
    // console.log(params)
  return (
    <div>
      <h1>
        This is Dynamic Product Page: {params.productId}: {searchParams.category}{" "}
      </h1>
    </div>
  );
};

export default DynamicProductPage;
