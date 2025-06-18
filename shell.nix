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
    hugo
    pagefind
    dart-sass
    nodePackages_latest.nodejs
    yq-go
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
