const CollectionTab = ({ tabs, activeTab, setActiveTab }) => {
  // const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="sub-tab d-flex">
      {tabs.map((t, index) => (
        <div
          className={`item-slider-sub ${activeTab === index && "active"}`}
          onClick={() => setActiveTab(index)}
        >
          {t.name}
        </div>
      ))}
    </div>
  );
};
export default CollectionTab;
