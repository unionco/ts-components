const common = require('./common');

async function main() {
    try {
        if (process.argv.indexOf('--help') !== -1 || process.argv.indexOf('-h') !== -1) {
            usage();
            process.exit(0);
        }

        // if (!process.env.NPM_API_TOKEN) {
        //     throw new Error('env.NPM_API_TOKEN is undefined');
        // }

        let versionType = undefined;
        if (process.argv.indexOf('--major') !== -1) {
            versionType = 'major';
        } else if (process.argv.indexOf('--minor') !== -1) {
            versionType = 'minor';
        } else {
            versionType = 'patch';
        }
        
        await common.preparePkg(versionType);

        console.log('\nVersion successfully incremented. Commit changes and push to Github to deploy to NPM\n');
    } catch(err) {
        console.error(err);
        process.exit(1);
    }
}

function usage() {
    console.log('\nnode prepare.js [--patch|--minor|--major]\n');
    console.log('Run this script before pushing to the Github origin.')
}

main();