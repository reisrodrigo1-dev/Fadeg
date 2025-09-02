import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

export default function ChildrenTree({
  familyTree,
  selectedChild,
  setSelectedChild,
  selectedButtonId,
  setSelectedButtonId,
  setUpdatedFamilyTree,
  updatedFamilyTree,
}) {
  const handleButtonClick = (child) => {
    setSelectedButtonId(child.SKU);
    setSelectedChild(child);

    const updatedFamilyTree = cloneFamilyTree(familyTree);

    setUpdatedFamilyTree(updatedFamilyTree);

    const updateSelectedInTree = (node) => {
      if (node.ProductId === child.ProductId) {
        node.Selected = true;
        updatedFamilyTree.Selected = true;
      } else if (node.Children && node.Children.length > 0) {
        node.Children.forEach(updateSelectedInTree);
      }
    };

    updateSelectedInTree(updatedFamilyTree);
  };

  const cloneFamilyTree = (node) => {
    return JSON.parse(JSON.stringify(node));
  };

  const renderChildButton = (child) => {
    const isSelected = selectedButtonId === child.SKU;
    const isOutOfStock =
      child.ProductGroupId === 1 &&
      !child.Selected &&
      child.InStock === false;

    if (
      (child.ProductGroupId === 1 && !child.Selected) ||
      (child.ProductGroupId === 2 && !child.Selected)
    ) {
      const buttonLabel = isOutOfStock
        ? `${child.Name} - FORA DE ESTOQUE`
        : child.Name;
      const isDisabled = isOutOfStock;

      return (
        <Button
          onClick={() => handleButtonClick(child)}
          style={{
            marginBottom: "10px",
            backgroundColor: isSelected ? "#ff9d00" : "#e1e1e1e1",
            color: isSelected
              ? "white"
              : isOutOfStock
              ? "#00000042"
              : "black",
          }}
          disabled={isDisabled}
        >
          {buttonLabel}
        </Button>
      );
    }
    return null;
  };

  return (
    <div style={{ paddingLeft: 10 }}>
      {familyTree.Children?.map((child) => (
        <div key={child.ProductId}>
          {renderChildButton(child)}
          {child.Children && child.Children.length > 0 && (
            <div style={{ marginLeft: -10 }}>
              <ChildrenTree
                selectedChild={selectedChild}
                setSelectedChild={setSelectedChild}
                familyTree={child}
                setUpdatedFamilyTree={setUpdatedFamilyTree}
                updatedFamilyTree={updatedFamilyTree}
                selectedButtonId={selectedButtonId}
                setSelectedButtonId={setSelectedButtonId}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
