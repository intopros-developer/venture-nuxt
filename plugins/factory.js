import helperFactory from '~/factory/helper';
import maskFactory from '~/factory/mask';
// import client from '~/factory/contentful';
import hubspotFactory from '~/factory/hubspot';

export default (ctx, inject) => {
    inject('helper', helperFactory(ctx));
    inject('mask', maskFactory);
    // inject('contentful', client.createClient());
    // inject('contentfulManagement', client.managementCreateClient());
    inject('hubspot', hubspotFactory(ctx));
};
