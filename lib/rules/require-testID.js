module.exports = {
  meta: {
    docs: {
      description:
        "Require the 'testID' prop to be included in all React Native components.",
      category: "Best Practices",
      recommended: true,
    },
    schema: [],
    type: "problem",
    messages: [],
  },
  create: function (context) {
    return {
      JSXOpeningElement(node) {
        const isReactNativeComponent = node.name.name.match(/^[A-Z]/);
        const hasTestIdProp = node.attributes.some(
          (attr) => attr.name.name === "testID"
        );
        if (isReactNativeComponent && !hasTestIdProp) {
          context.report({
            node,
            messageId:
              "React Native component '{{component}}' is missing the 'testID' prop.",
            data: {
              component: node.name.name,
            },
          });
        }
      },
    };
  },
};
