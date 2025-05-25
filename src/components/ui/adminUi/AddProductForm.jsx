import { useForm } from "react-hook-form";
  import {  toast } from 'react-toastify';

const AddProductForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();

    const productData = {
      name: data.name,
      description: data.description,
      price: parseFloat(data.price),
      category: data.category,
      stock: parseInt(data.stock),
      ratings: parseFloat(data.ratings),
      numReviews: parseInt(data.numReviews),
      createdAt: new Date().toISOString(),
    };

    formData.append("data", JSON.stringify(productData));
    formData.append("file", data.file[0]);

    try {
      const res = await fetch("http://localhost:3000/api/v1/products/create-product", {
        method: "POST",
        body: formData,
      });
      if(!res.ok){
        throw new Error("fail to add product")
      }
      toast.success("Product added successfully!");
      const result = await res.json();
      console.log("✅ Product Created:", result);
      reset(); // Clear form after submit
    } catch (error) {
      console.error("❌ Failed to upload:", error);
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow-lg max-w-5xl mx-auto mt-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Add New Product
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Image Upload */}
        <div>
          <label className="block font-semibold mb-2">Product Image</label>
          <input
            type="file"
            accept="image/*"
            {...register("file", { required: "Image is required" })}
            className="block border px-3 py-2 rounded w-full"
          />
          {errors.file && (
            <p className="text-red-500 text-sm">{errors.file.message}</p>
          )}
        </div>

        {/* Product Info Inputs */}
        <div className="flex flex-wrap gap-6">
          <div className="flex-1 min-w-[250px]">
            <label className="block font-semibold mb-1">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full border px-3 py-2 rounded"
              placeholder="Product name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="flex-1 min-w-[250px]">
            <label className="block font-semibold mb-1">Category</label>
            <input
              type="text"
              {...register("category", { required: "Category is required" })}
              className="w-full border px-3 py-2 rounded"
              placeholder="Category"
            />
            {errors.category && (
              <p className="text-red-500 text-sm">
                {errors.category.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-6">
          <div className="flex-1 min-w-[200px]">
            <label className="block font-semibold mb-1">Price ($)</label>
            <input
              type="number"
              step="0.01"
              {...register("price", { required: true, min: 0 })}
              className="w-full border px-3 py-2 rounded"
              placeholder="100"
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price.message}</p>
            )}
          </div>

          <div className="flex-1 min-w-[200px]">
            <label className="block font-semibold mb-1">Stock</label>
            <input
              type="number"
              {...register("stock", { required: true, min: 0 })}
              className="w-full border px-3 py-2 rounded"
              placeholder="50"
            />
            {errors.stock && (
              <p className="text-red-500 text-sm">{errors.stock.message}</p>
            )}
          </div>

          <div className="flex-1 min-w-[200px]">
            <label className="block font-semibold mb-1">Ratings</label>
            <input
              type="number"
              step="0.1"
              {...register("ratings", {
                required: true,
                min: 0,
                max: 5,
              })}
              className="w-full border px-3 py-2 rounded"
              placeholder="4.5"
            />
            {errors.ratings && (
              <p className="text-red-500 text-sm">
                {errors.ratings.message}
              </p>
            )}
          </div>

          <div className="flex-1 min-w-[200px]">
            <label className="block font-semibold mb-1">Reviews</label>
            <input
              type="number"
              {...register("numReviews", { required: true, min: 0 })}
              className="w-full border px-3 py-2 rounded"
              placeholder="10"
            />
            {errors.numReviews && (
              <p className="text-red-500 text-sm">
                {errors.numReviews.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            {...register("description", { required: "Description is required" })}
            className="w-full border px-3 py-2 rounded"
            placeholder="Write product description..."
          />
          {errors.description && (
            <p className="text-red-500 text-sm">
              {errors.description.message}
            </p>
          )}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-green-600 text-white px-8 py-3 rounded hover:bg-green-700 transition"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
