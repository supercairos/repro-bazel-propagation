workspace(
    name = "test",
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

########################################
# Prepare a hermetic NodeJs interpreter
#
# Includes Nodejs, NPM, Yarn
#
# See these links for details:
#    - https://github.com/bazelbuild/rules_nodejs
########################################
http_archive(
    name = "rules_nodejs",
    sha256 = "764a3b3757bb8c3c6a02ba3344731a3d71e558220adcb0cf7e43c9bba2c37ba8",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/5.8.2/rules_nodejs-core-5.8.2.tar.gz"],
)

http_archive(
    name = "aspect_rules_js",
    sha256 = "7c50475662810ce9635fa45d718220285a8adef32b2febd8631aae62e5816353",
    strip_prefix = "rules_js-1.23.2",
    url = "https://github.com/aspect-build/rules_js/releases/download/v1.23.2/rules_js-v1.23.2.tar.gz",
)

http_archive(
    name = "aspect_rules_ts",
    sha256 = "8eb25d1fdafc0836f5778d33fb8eaac37c64176481d67872b54b0a05de5be5c0",
    strip_prefix = "rules_ts-1.3.3",
    url = "https://github.com/aspect-build/rules_ts/releases/download/v1.3.3/rules_ts-v1.3.3.tar.gz",
)

load("@aspect_rules_js//js:repositories.bzl", "rules_js_dependencies")

rules_js_dependencies()

load("@aspect_rules_ts//ts:repositories.bzl", "rules_ts_dependencies", TYPESCRIPT_LATEST_VERSION = "LATEST_VERSION")

# buildifier: disable=print
print("Using typescript version: " + TYPESCRIPT_LATEST_VERSION)

rules_ts_dependencies(ts_version = TYPESCRIPT_LATEST_VERSION)

load("@rules_nodejs//nodejs:repositories.bzl", "DEFAULT_NODE_VERSION", "nodejs_register_toolchains")

# buildifier: disable=print
print("Using nodejs version: " + DEFAULT_NODE_VERSION)

nodejs_register_toolchains(
    name = "nodejs",
    node_version = DEFAULT_NODE_VERSION,
)

load("@aspect_rules_js//npm:npm_import.bzl", "npm_translate_lock")

npm_translate_lock(
    name = "npm",
    data = [
        "//:package.json",
        "//:pnpm-workspace.yaml",
        "//a:package.json",
        "//b:package.json",
        "//c:package.json",
    ],
    npmrc = "//:.npmrc",
    pnpm_lock = "//:pnpm-lock.yaml",
    update_pnpm_lock = True,
    verify_node_modules_ignored = "//:.bazelignore",
)

load("@npm//:repositories.bzl", "npm_repositories")

npm_repositories()

load("@aspect_bazel_lib//lib:repositories.bzl", "register_jq_toolchains")

register_jq_toolchains()
