load("@aspect_rules_ts//ts:defs.bzl", "ts_config", "ts_project")
load("@aspect_rules_js//js:defs.bzl", "js_binary")
load("@npm//:defs.bzl", "npm_link_all_packages")

npm_link_all_packages()

ts_config(
    name = "tsconfig",
    src = "tsconfig.json",
)

ts_project(
    name = "lib",
    srcs = glob([
        "src/**/*.ts",
        "types/**/*.d.ts",
    ]),
    declaration = True,
    declaration_map = True,
    source_map = True,
    tsconfig = "tsconfig",
    validate = True,
    visibility = ["//visibility:public"],
    deps = [
        ":node_modules",
    ],
)

js_binary(
    name = "a",
    data = [
        ":lib",
        ":node_modules",
    ],
    entry_point = ":src/index.js",
    tags = [
        "manual",
    ],
)
