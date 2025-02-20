import Image from "next/image";
import Link from "next/link";

const CategoriesCards = ({ item }) => {
  const categorySlug = (item?.sub_catname)
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .toLowerCase();

  return (
    <Link className="relative" href={`/categories#${categorySlug}`}>
      <div className="w-full relative py-3 px-5 aspect-video flex justify-start items-end">
        <div className="overlay absolute top-0 left-0 w-full h-full z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Image
            src={item?.sub_catimg}
            width={1000}
            height={1000}
            alt={item?.sub_catname}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-kaisei text-[--accent] h4 z-20 line-clamp-1">
          {item?.sub_catname}
        </h3>
      </div>
    </Link>
  );
};

export default CategoriesCards;
