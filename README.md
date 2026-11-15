# VS2026 Nord Shell Theme

A Visual Studio 2026 theme with the built-in Cool Slate interface and the NordFluent editor palette. The editor uses NordFluent for syntax, semantic highlighting, the background, selections, and editor markers.

## Install

Download `VS2026.NordShell.vsix` from [Releases](https://github.com/Nitload-NSI/vs2026-nord-theme/releases), open it, and restart Visual Studio. Select **VS2026 Nord Shell** under **Tools → Theme** and set **Editor Appearance** to **Match Theme**.

## Files

- `VS2026.NordShell.csproj`: Visual Studio extension project.
- `source.extension.vsixmanifest`: VSIX manifest targeting Visual Studio 2026 18.x.
- `Themes/VS2026.NordShell.vstheme`: Cool Slate shell colors and NordFluent editor categories, including C# semantic highlighting.
- `docs/nord-colors.md`: Local record of Nord `nord0` through `nord15`.
- `references/CustomTheme.vstheme`: Local reference copy of the upstream NordFluentTheme theme used for editor color migration.
- `backups/VS2026.NordShell.before-editor-colors.vstheme`: Backup taken before editor color categories were imported.

GLSL-specific editor color entries were not present in the reference theme, so they have not been fabricated here.

## Build

Run from a Visual Studio Developer PowerShell session.

```powershell
MSBuild.exe VS2026.NordShell.csproj /restore /p:Configuration=Release
```

The VSIX is written to `bin/Release/net472/VS2026.NordShell.vsix`.
