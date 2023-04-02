load("@aspect_rules_js//js:defs.bzl", "js_library")
load("@aspect_rules_js//npm:defs.bzl", "npm_package", "stamped_package_json")
load("@aspect_rules_ts//ts:defs.bzl", "ts_project")
load("@npm//:defs.bzl", "npm_link_all_packages")

npm_link_all_packages()

##
## BUILD
##
ts_project(
    name = "ts",
    srcs = glob([
        "src/**/*.ts",
    ]),
    declaration = True,
    declaration_map = True,
    source_map = True,
    tsconfig = "tsconfig.json",
    deps = [
        ":node_modules",
    ],
)

stamped_package_json(
    name = "package",
    stamp_var = "STABLE_SCM_TAG",
)

js_library(
    name = "js",
    srcs = [":package"],
    deps = [
        ":ts",
    ],
)

##
## RELEASE
##
npm_package(
    name = "b",
    srcs = [
        ":js",
    ],
    include_runfiles = False,
    package = "@test/b",
    visibility = ["//visibility:public"],
)
