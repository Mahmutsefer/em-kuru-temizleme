

type Item = {
  title: string;
  image: string;
  price?: string;
};

export default function DryCleaningGallery({
  items,
}: {
  items: Item[];
}) {
  return (
    <div className="dry-cleaning-items">
      {items.map((item) => (
        <div
          className="dry-cleaning-item"
          key={item.title}
        >
          <div className="dry-cleaning-item-image">
            <img
              src={item.image}
              alt={item.title}
            />
          </div>

          <div className="dry-cleaning-item-info">
  <h3>{item.title}</h3>
</div>
        </div>
      ))}
    </div>
  );
}