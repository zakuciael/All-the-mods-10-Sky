{
  description = "All the Mods 10: To the Sky";

  inputs = {
    nixpkgs.url = "nixpkgs/nixos-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
  };

  outputs =
    { flake-parts, ... }@inputs:
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [
        "x86_64-linux"
      ];

      perSystem =
        { pkgs, ... }:
        {
          devShells.default = pkgs.mkShell {
            name = "ATM10SKY";
            nativeBuildInputs = with pkgs; [
              nodePackages.prettier
              pakku
            ];
          };
        };
    };
}
