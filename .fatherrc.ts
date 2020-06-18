import { IBundleOptions } from 'father-build';
const options:IBundleOptions =  {
    esm: {
        type: 'babel',
        mjs: true,
        minify: true,
        importLibToEs: true,
    }
}

export default options;
