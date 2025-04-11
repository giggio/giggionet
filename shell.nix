{ pkgs ? import <nixpkgs> { }, stdenv ? pkgs.stdenv, ... }:

let
  h_completions = stdenv.mkDerivation {
    pname = "h_completions";
    version = "0.0.1";
    src = ./nix;
    buildInputs = [ ];
    nativeBuildInputs = [ pkgs.installShellFiles ];
    buildPhase = ''
      # empty
    '';
    installPhase = ''
      mkdir -p $out/bin
      cp ./h $out/bin
      installShellCompletion --cmd h --bash <(bash h complete)
    '';
  };
in
pkgs.mkShell {
  nativeBuildInputs = with pkgs; [
    delta
    h_completions
    http-server
    (hugo.overrideAttrs rec { # todo: remove override when 0.146.2 is merged into nixpkgs
      version = "0.146.2";
      src = fetchFromGitHub {
        owner = "gohugoio";
        repo = "hugo";
        tag = "v${version}";
        hash = "sha256-sicfI+IRPcVzyWlGf7ZoQsr0my1csiQ/c+91fJDupUw=";
      };
      vendorHash = "sha256-LSNy65sIuq/zK3swdUvxGwbo/3ulq+JP5ur7M7aTdAs=";
    })
    pagefind
    dart-sass
    nodePackages_latest.nodejs
    yq
  ];
  shellHook = ''
    if ! [ -d node_modules ]; then
      echo "Installing node_modules..."
      npm ci
    fi
    export PATH=$PATH:$PWD/node_modules/.bin
    echo "Let's Hugo!"
  '';
}
