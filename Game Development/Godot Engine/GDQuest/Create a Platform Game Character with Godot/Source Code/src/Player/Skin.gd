extends Node2D

signal animation_finisheed(anim_name)

onready var anim: AnimationPlayer = $AnimationPlayer

func _ready() -> void:
	anim.connect("animation_finished", self, "_on_AnimationPlayer_animation_finished")
	
	
func _on_AnimationPlayer_animation_finished(anim_name: String) -> void:
	emit_signal("animation_finished", anim_name)
	
func play(anim_name: String) -> void:
	anim.play(anim_name)
