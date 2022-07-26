import React from "https://esm.sh/react@18.1.0";
import { Link, Route, Switch } from "https://esm.sh/react-router-dom@5.3.3";
import htm from "https://esm.sh/htm@3.1.1";
import * as log from "https://transpile.deno.dev/https://deno.land/std@0.149.0/log/mod.ts";
import * as SUI from "https://esm.sh/semantic-ui-react@2.1.3";

const html = htm.bind(React.createElement);

export { html, Link, log, React, Route, SUI, Switch };
