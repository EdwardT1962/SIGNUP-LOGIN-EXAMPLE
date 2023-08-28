import React from 'react';

function PackagePreview({ packageDetails }) {
  if (!packageDetails) {
    return <div>No package selected</div>;
  }

  return (
    <div className="package-preview">
      <h2>Package Preview</h2>
      <p>Name: {packageDetails.name}</p>
      <p>Description: {packageDetails.description}</p>
      <p>Price: ${packageDetails.price}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default PackagePreview;
