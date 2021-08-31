exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === 'build-html') {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /slick-carousel/,
                        use: loaders.null(),
                    }
                ],
            },
        });
    }
}