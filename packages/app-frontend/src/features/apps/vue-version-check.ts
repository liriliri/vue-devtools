import { onMounted, ref } from 'vue'
import semver from 'semver'

const packageData = ref<any>(null)

export function useVueVersionCheck() {
  function getLatestVersion(currentVersion: string): string {
    if (packageData.value && packageData.value.versions) {
      return semver.maxSatisfying(Object.keys(packageData.value.versions), `^${currentVersion}`)
    }
    return currentVersion
  }

  return {
    getLatestVersion,
  }
}
