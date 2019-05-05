const test = require('ava');
const { factory, runTasks } = require('release-it/test/util');
const Plugin = require('.');

const namespace = 'my-plugin';

test('should not throw', async t => {
  const options = { [namespace]: {} };
  const plugin = factory(Plugin, { namespace, options });
  await t.notThrowsAsync(runTasks(plugin));
});
